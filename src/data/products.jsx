export const productsColumns = [
    {
      accessorKey: "image", //access nested data with dot notation
      header: "Avatar",
      size: 100,
      Cell: ({ cell }) => (
        <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
          <img src={cell.getValue()} alt="" width={60} style={{borderRadius:'50%'}}/>
        </div>
      ),
    },
    {
      accessorKey: "nombres", //access nested data with dot notation
      header: "Nombres",
    },
    {
      accessorKey: "apellidos", //access nested data with dot notation
      header: "Apellidos",
    },
    {
      accessorKey: "dni",
      header: "DNI",
      /* Cell: ({ cell }) => <span>${cell.getValue()}</span>, */
    },
    {
      accessorKey: "correo", //access nested data with dot notation
      header: "Correo",
    },
    {
      accessorKey: "rol", //access nested data with dot notation
      header: "Rol",
      Cell:({cell,row}) => (
        <div>
          {
            row.original.rol === 'Estudiante' && (
              <span className={`rol ${cell.getValue}`} style={{color:'#c49c1a',backgroundColor:'#c49c1a33'}}>{cell.getValue()}</span>
            )
          }
          {
            row.original.rol === 'Docente' && (
              <span className={`rol ${cell.getValue}`} style={{color:'#388b84',backgroundColor:'#388b8433'}}>{cell.getValue()}</span>
            )
          }
          {
            row.original.rol === 'Admin' && (
              <span className={`rol ${cell.getValue}`} style={{color:'#fd4332',backgroundColor:'#fd433233'}}>{cell.getValue()}</span>
            )
          }
        </div>
      )
    },
    {
      accessorKey: "estado",
      header: "Estado",
      //or in the component override callbacks like this
      Cell: ({ cell, row }) => (
        <div>
          {row.original.estado && (
            <span style={{ color: "#388b84", textTransform: "capitalize" }}>
              Activo
            </span>
          )}
          {!row.original.estado && (
            <span style={{ color: "#fd4332", textTransform: "capitalize" }}>
              Desactivo
            </span>
          )}
        </div>
      ),
    },
  ];
  
  export const products = [
    {
      id: 1,
      nombres: "Jhonatan Raul",
      apellidos: "Panduro Orihuela",
      dni: '79912121',
      correo:'jhoas@gmai.com',
      quantity: 10,
      estado: false,
      short_description:
        "The latest iPhone with a Super Retina XDR display and 5G capabilities",
      image: "/assets/images/avatars/avatar_1.jpg",
      rol:'Estudiante',
    },
    {
      id: 2,
      nombres: "Andy Zico",
      apellidos: "Huincho Zevallos",
      dni: "14991231",
      correo:'jhoas@gmai.com',
      quantity: 5,
      estado: true,
      short_description:
        "A powerful laptop with a Retina display and an 8-core processor",
      image: "/assets/images/avatars/avatar_1.jpg",
      rol:'Docente',
    },
    {
      id: 3,
      nombres: "Ana ",
      apellidos: "Perez",
      dni: "39912312",
      correo:'anaperez12@gmai.com',
      quantity: 15,
      estado: false,
      short_description:
        "The latest Apple Watch with a always-on Retina display and various health features",
      image: "/assets/images/avatars/avatar_2.jpg",
      rol:'Admin',
    },
    {
      id: 4,
      nombres: "Jessi",
      apellidos: "Calderon",
      dni: "7878747",
      correo:'jessy@gmai.com',
      quantity: 3,
      estado: true,
      short_description:
        "A professional mirrorless camera with a 20 megapixel full-frame CMOS sensor",
      image: "/assets/images/avatars/avatar_3.jpg",
      rol:'Admin',
    },
    {
      id: 5,
      nombres: "Juan",
      apellidos: "Ramos Flores",
      dni: "69912123",
      correo:'jasasuan13@gmai.com',
      quantity: 8,
      estado: false,
      short_description:
        "A flagship smartphone with a 5G-compatible processor and a 6-inch OLED display",
      image: "/assets/images/avatars/avatar_5.jpg",
      rol:'Estudiante',
    },
    {
      id: 6,
      nombres: "Alberto juan",
      apellidos: "Lopez Rodriguez",
      dni: "1299",
      correo:'albertas@gmai.com',
      quantity: 12,
      estado: true,
      short_description:
        "A thin and lightweight laptop with an InfinityEdge display and an 11th Gen Intel Core processor",
      image: "/assets/images/avatars/avatar_6.jpg",
      rol:'Estudiante',
    },
    {
      id: 7,
      nombres: "Nancy",
      apellidos: "Castro Godinez",
      dni: "32912312",
      correo:'nancy12@gmai.com',
      quantity: 20,
      estado: true,
      short_description:
        "A smartwatch with various health and fitness tracking features, as well as mobile payments",
      image: "/assets/images/avatars/avatar_7.jpg",
      rol:'Docente',
    },
  ];
  