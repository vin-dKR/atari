const express = require('express');
const router = express.Router();

const userManagementController = require('../controllers/userManagementController.js');
const prisma = require('../config/prisma.js');
const { authenticateToken, requireRole, requirePermission } = require('../middleware/auth.js');
const { strictRateLimiter, apiRateLimiter } = require('../middleware/rateLimiter.js');

// Module code for user management (same as USER_SCOPE for role-based permission fallback)
const USER_MANAGEMENT_MODULE = 'USER_SCOPE';

// Apply authentication and admin role check to all admin routes
router.use(
  authenticateToken,
  requireRole(['super_admin', 'zone_admin', 'state_admin', 'district_admin', 'org_admin', 'kvk']),
);

// List users (with filters) – requires VIEW
router.get('/users', apiRateLimiter, requirePermission(USER_MANAGEMENT_MODULE, 'VIEW'), userManagementController.getUsers);

// Create user – requires ADD
router.post('/users', strictRateLimiter, requirePermission(USER_MANAGEMENT_MODULE, 'ADD'), userManagementController.createUser);

// Get single user – requires VIEW
router.get('/users/:id', apiRateLimiter, requirePermission(USER_MANAGEMENT_MODULE, 'VIEW'), userManagementController.getUserById);

// Update user – requires EDIT
router.put('/users/:id', strictRateLimiter, requirePermission(USER_MANAGEMENT_MODULE, 'EDIT'), userManagementController.updateUser);

// Delete user (soft delete) – requires DELETE
router.delete('/users/:id', strictRateLimiter, requirePermission(USER_MANAGEMENT_MODULE, 'DELETE'), userManagementController.deleteUser);

// Get all roles (for dropdowns)
router.get('/roles', apiRateLimiter, async (_req, res) => {
  try {
    const roles = await prisma.role.findMany({
      select: { roleId: true, roleName: true, description: true },
      orderBy: { roleId: 'asc' },
    });
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch roles' });
  }
});

module.exports = router;

