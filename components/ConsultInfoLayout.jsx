import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Layout.module.css"


export default function ConsultInfoLayout({page, student, counseling, fun}) {
  return (
    <div>
        <Head>
          <title>{page.title}</title>
          <meta name="description" content={page.desc}/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
        </Head>
        <header className={styles.header}>
            <div>
              <Link href="/">
                <a><button type="button" className="btn btn-primary">Volver</button></a>
              </Link>
            </div>
            <div className={styles.right}>
              <label className={styles.label}>{student.name}</label>
              <label className={styles.label}>{student.rol}</label>
            </div>
            <div className={styles.imag}>
              <Image
                className="img-circle"
                src={student.img}
                height={50}
                width={50}
                alt="Profile"
              >  
              </Image>
            </div>
        </header>
        <main className={styles.main}>
          <div className={styles.info}>
            <h3>{counseling.name}</h3>
            <h5>Vista: {counseling.view}</h5>
            <h5>Fecha: {counseling.date}</h5>
            <h5>Hora: {counseling.hour}</h5>
            <h5>Responsable: {counseling.manager}</h5>
            <h5>Materia: {counseling.subject}</h5>
            <h5>Tipo: {counseling.type}</h5>
            <h5>Medio: {counseling.means}</h5>
            <h5>Descripcion: <p>{counseling.desc}</p></h5>
            <br/><br/><br/>

            <button onClick={fun}>INGRESAR A ASESORIA</button>
          </div> 
          <div className={styles.table}>
            <table className="table table-light">
              <thead className="thead-light">
                <tr><th scope="col">Participantes: </th></tr>
              </thead>
              <tbody>
                {counseling.participants.map(e => (
                  <tr>
                    <td className={styles.participantItem}>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> 
        </main>
        <footer className={styles.header}>
          <h1></h1>
        </footer>
    </div>
  )
}

ConsultInfoLayout.defaultProps = {
  title: "Pagina en progreso",
  desc: "Descripcion en progreso",
  name: "Nombre",
  rol: "ROL",
  value: ["Participante 1", "Participante 2", "Participante 3"]
}