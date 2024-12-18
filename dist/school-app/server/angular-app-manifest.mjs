
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/auth"
  },
  {
    "renderMode": 2,
    "route": "/auth/login"
  },
  {
    "renderMode": 2,
    "route": "/auth/register"
  },
  {
    "renderMode": 2,
    "route": "/student"
  },
  {
    "renderMode": 2,
    "route": "/student/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/student/profile"
  },
  {
    "renderMode": 2,
    "route": "/student/attendance"
  },
  {
    "renderMode": 2,
    "route": "/teacher"
  },
  {
    "renderMode": 2,
    "route": "/teacher/teacher-dashboard"
  },
  {
    "renderMode": 2,
    "route": "/teacher/student-list"
  },
  {
    "renderMode": 2,
    "route": "/admin"
  },
  {
    "renderMode": 2,
    "redirectTo": "/auth/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/auth/login",
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 14439, hash: '1902406d6c68ddce510c45134e2c9f5fc752ede893d7306dba571ea9df6b28b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8017, hash: '1f2b60b569cdb261dcde8b7b88000fd39fb2dd133d4150439def53227aef27fd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 16701, hash: '65bea88ed31d2badd03ba65aeab62039693960b9a801e657582202f16f97796e', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 16701, hash: '65bea88ed31d2badd03ba65aeab62039693960b9a801e657582202f16f97796e', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'student/index.html': {size: 14764, hash: '15f83bab11cc3579f5f4a4373554905ffd7eedf2bc1b708f7a3df16eb4a4471e', text: () => import('./assets-chunks/student_index_html.mjs').then(m => m.default)},
    'student/dashboard/index.html': {size: 14764, hash: '15f83bab11cc3579f5f4a4373554905ffd7eedf2bc1b708f7a3df16eb4a4471e', text: () => import('./assets-chunks/student_dashboard_index_html.mjs').then(m => m.default)},
    'student/profile/index.html': {size: 14764, hash: '15f83bab11cc3579f5f4a4373554905ffd7eedf2bc1b708f7a3df16eb4a4471e', text: () => import('./assets-chunks/student_profile_index_html.mjs').then(m => m.default)},
    'auth/register/index.html': {size: 19704, hash: '7e48fde213900d2791af203550087f83ed61d1f7490dd80f241ff0045e27cbd4', text: () => import('./assets-chunks/auth_register_index_html.mjs').then(m => m.default)},
    'student/attendance/index.html': {size: 14764, hash: '15f83bab11cc3579f5f4a4373554905ffd7eedf2bc1b708f7a3df16eb4a4471e', text: () => import('./assets-chunks/student_attendance_index_html.mjs').then(m => m.default)},
    'teacher/index.html': {size: 14764, hash: '15f83bab11cc3579f5f4a4373554905ffd7eedf2bc1b708f7a3df16eb4a4471e', text: () => import('./assets-chunks/teacher_index_html.mjs').then(m => m.default)},
    'teacher/teacher-dashboard/index.html': {size: 14764, hash: '15f83bab11cc3579f5f4a4373554905ffd7eedf2bc1b708f7a3df16eb4a4471e', text: () => import('./assets-chunks/teacher_teacher-dashboard_index_html.mjs').then(m => m.default)},
    'teacher/student-list/index.html': {size: 14764, hash: '15f83bab11cc3579f5f4a4373554905ffd7eedf2bc1b708f7a3df16eb4a4471e', text: () => import('./assets-chunks/teacher_student-list_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 14764, hash: '15f83bab11cc3579f5f4a4373554905ffd7eedf2bc1b708f7a3df16eb4a4471e', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'styles-UVLPICI6.css': {size: 7835, hash: 'VaCx7//mSHA', text: () => import('./assets-chunks/styles-UVLPICI6_css.mjs').then(m => m.default)}
  },
};
