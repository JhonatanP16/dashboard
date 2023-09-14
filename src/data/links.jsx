import { ArticleOutlined, CalendarMonthOutlined, 
    Dashboard, 
    DescriptionOutlined, 
    LibraryBooksOutlined, 
    Logout, 
    MessageOutlined, 
    NotificationsNoneOutlined, 
    PersonOutline } from '@mui/icons-material'

export  const navConfig = [
    {
      title: 'Pagina principal',
      path: '/dashboard/app',
      icon: (<Dashboard/>),
    },
    {
      title: 'Usuarios',
      icon: (<PersonOutline/>),
      subLinks:[
        {
          name:'Todos los usuarios',
          url: '/dashboard/users',
        },
        {
          name:"Nuevo Usuario",
          url:'/dashboard/users/add'
        },
        {
          name:'Roles',
          url:'/dashboard/users/roles'
        }
      ]
    },
    {
      title: 'Notificaciones',
      path: '/dashboard/notify',
      icon: (<NotificationsNoneOutlined/>),
    },
    {
      title: 'Cursos',
      path: '/dashboard/course',
      icon: (<LibraryBooksOutlined/>),
    },
    {
      title: 'Calendario',
      path: '/dashboard/calendar',
      icon: (<CalendarMonthOutlined />),
    },
    {
      title: 'Mensajes',
      path: '/dashboard/messages',
      icon: (<MessageOutlined />),
    },
    {
        title: 'Calificaciones',
        path: '/dashboard/notes',
        icon: (<DescriptionOutlined/>),
    },
    {
        title: 'Cerrar Sesion',
        path: '/dashboard/logout',
        icon: (<Logout/>),
    },
];