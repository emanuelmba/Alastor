import { useState, useContext, useEffect } from 'react'
import { send } from 'emailjs-com'
import { FaAmazon, FaBloggerB, FaRegHandshake } from 'react-icons/fa'
import Content from '../data/Content'

function Contacto() {
  const { setBanner } = useContext(Content)
  const [msg, setMsg] = useState(
    'Envíe su consulta o pedido mediante el siguiente formulario:'
  )
  const [color, setColor] = useState('')
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    lugar: '',
    motivo: '',
    mensaje: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6})$/
    e.preventDefault()
    if (
      form.nombre === '' ||
      form.email === '' ||
      form.lugar === '' ||
      form.mensaje === ''
    ) {
      setMsg('Complete todos los campos.')
      setColor('warning')
    } else if (!regex.test(form.email)) {
      setMsg('Proporcione un email válido.')
      setColor('warning')
    } else if (
      form.mensaje.includes(' SEO') ||
      form.mensaje.includes('traffic') ||
      form.mensaje.includes('website') ||
      form.mensaje.includes('.ru')
    ) {
      setMsg('Su spam no es nada bienvenido. ¡Fuera de aquí!')
      setColor('error')
      setForm('')
    } else {
      send(
        process.env.REACT_APP_EM_SERV,
        process.env.REACT_APP_EM_TEMP,
        form,
        process.env.REACT_APP_EM_USER
      )
        .then((response) => {
          setMsg('Su mensaje ha sido enviado. Recibirá respuesta a la brevedad.')
          setColor('')
        })
        .catch((err) => {
          setMsg('Se ha producido un error. Vuelva a intentarlo más tarde.')
          setColor('error')
        })
      setForm('')
    }
  }

  useEffect(() => {
    setBanner('url(../imgs/alastor-con.jpg)')
  }, [])

  document.title = 'Editorial Alastor | Contacto'

  return (
    <main className='con'>
      <div>
        <div className={'msg msg-' + color}>{msg}</div>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input
              type='text'
              name='nombre'
              value={form.nombre || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type='email'
              name='email'
              value={form.email || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Lugar</label>
            <input
              type='text'
              name='lugar'
              value={form.lugar || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Motivo</label>
            <select name='motivo' value={form.motivo || ''} onChange={handleChange}>
              <option value=''>-- Elija una opción de la lista --</option>
              <option value='Pedido'>Realizar un pedido</option>
              <option value='Ebook'>Solicitar un ebook abonado</option>
              <option value='Otro'>Otro tipo de consulta</option>
            </select>
          </div>
          <div>
            <label>Mensaje</label>
            <textarea
              type='text'
              name='mensaje'
              rows='4'
              value={form.mensaje || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <br />
            <button className='nav-btn' type='submit'>
              Enviar
            </button>
          </div>
        </form>

        <div className='social'>
          <img src='../imgs/ea.png' alt='Editorial Alastor' />
          <br />
          <strong>Editorial Alastor</strong>
          <br />
          Buenos Aires - Argentina
          <br />
          <br />
          <a
            href='http://editorial-alastor.blogspot.com/'
            target='_blank'
            rel='noreferrer'
            title='Blogger'
          >
            <FaBloggerB />
          </a>
          <a
            href='http://perfil.mercadolibre.com.ar/edalastor'
            target='_blank'
            rel='noreferrer'
            title='MercadoLibre'
          >
            <FaRegHandshake />
          </a>
          <a
            href='https://www.amazon.com/s?i=stripbooks&rh=p_27%3AEditorial+Alastor'
            target='_blank'
            rel='noreferrer'
            title='Amazon'
          >
            <FaAmazon />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Contacto
