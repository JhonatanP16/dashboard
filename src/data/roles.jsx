export const rolesData = [
    {
        id:1,
        name:'Administrador',
        description:'El administrador podra mantener el sistema actualizado',
    },
    {
        id:2,
        name:'Estudiante',
        description:'El estudiante podra acceder alas notas',
    },
    {
        id:3,
        name:'Docente',
        description:'El docente se encarga de la carga de tarea academica y demas cursos',
    }
]
export const rolesColumns = [
    {
        accessorKey:'name',
        header:'Nombre',
    },
    {
        accessorKey:'description',
        header:'Descripción',
    }
]