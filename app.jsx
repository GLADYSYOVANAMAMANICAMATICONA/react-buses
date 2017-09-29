
const Tabla = (props) => {
  const _tds = props.items.map((item, index) => <td key={index}> {item} </td>);
  return (
    <tr>
      {_tds}
    </tr>
  )
}

const RTable = ({ seats }) => {
  return (
    <table width="300" border="3" className="table table-bordered text-center">
      <Tabla items={seats[0]} />
      <Tabla items={seats[1]} />
      <Tabla items={seats[2]} />
      <Tabla items={seats[3]} />
    </table>
  );
}

const Drawrender = () => {
  return (
    <div className="container-fluid">
      <h1 className=" page-header text-center">Reserva de Asientos</h1>
      <div className="row">
        <div className="col-xs-12">
          <div id="tablero">
            <RTable seats={seats} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12">
          <div>
            {ListaPasajeros(seats)}
          </div>
        </div>
      </div>
      </div>
      );
}

function ListaPasajeros(seats) {
        console.log("seats: ", seats);
  let pasajeros = [{Nombre: "Gustavo", Apellido: "Paz", Dni: 1 },//array de nombres que se mostrara al ejeccutar la pagina
                    {Nombre: "Rosa", Apellido: "Mamani", Dni: 2},
  ];
  return pasajeros.map((pasajeros, index) => {//MAP funciona como un array
    return (// se mostrara el array
      <li key={index}>
        <p>Nombre: {pasajeros.Nombre}</p>
        <p>Apellido: {pasajeros.Apellido}</p>
        <p>DNI N°: {pasajeros.Dni}</p>
      </li>
      );
  });
}

const App = ({title, seats }) => {
  return (
    <div>
        <Drawrender />
        <h3>{title}</h3>
      </div>
      );
}

let seats = [//array de numeros de asientos
  [4, 8, 12, 16, 20, 24, 28, 32],
  [3, 7, 11, 15, 19, 23, 27, 31],
  [2, 6, 10, 14, 18, 22, 26, 30],
  [1, 5, 9, 13, 17, 21, 25, 29]
]
//renderDOM 
ReactDOM.render(//se va mostrar en el root que esta en html tipo jquery
  <App title={'Hola Mundo!'} seats={seats} />,
  document.getElementById("root")
);
