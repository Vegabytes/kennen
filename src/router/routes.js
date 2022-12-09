
const routes = [
  { path: '/', component: () => import('pages/login.vue') },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/dashboard_v0.vue') },
      //{ path: '/dashboard', component: () => import('pages/dashboard.vue') },
      //{ path: '/dashboard_v2', component: () => import('pages/dashboard_v2.vue') },
      //{ path: '/dashboard_v3', component: () => import('pages/dashboard_v3.vue') },
      { path: '/clientes', component: () => import('pages/customer_management.vue') },
      //{ path: '/change_request', component: () => import('pages/change_request.vue') },
      { path: '/perfil', component: () => import('pages/my_profile.vue') },
      { path: '/pedidos', component: () => import('pages/sales_invoices.vue') },
      /*       { path: '/quotes', component: () => import('pages/quotes.vue') },
            { path: '/transactions', component: () => import('pages/transactions.vue') }, */
      { path: '/usuarios', component: () => import('pages/employee_salary_list.vue') },
      { path: '/calendario', component: () => import('pages/calendar.vue') },
      { path: '/contabilidad', component: () => import('pages/department.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
