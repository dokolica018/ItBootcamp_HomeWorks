import { useState } from 'react'
import './Form.css'
import { v1 as uuidv1 } from 'uuid'

const Form = ({ setPrihodi, setRashodi }) => {
    const [opisInput, setOpisInput] = useState('')
    const [iznosInput, setIznosInput] = useState('')
    const [selectInput, setSelectInput] = useState('')

    

    return (
        <section className="forms">
            <div className="container2">
                <form action="" className="form" onSubmit={() => {

                }}>
                    <div className="pr">
                        <select value={selectInput} className="form-select" name="pr" id="pr" onChange={(e) => {
                            setSelectInput(e.target.value)
                        }}>
                            <option value='' disabled={true}>-</option>
                            <option value="prihod">Приход</option>
                            <option value="rashod">Расход</option>
                        </select>
                    </div>
                    <div className="opis">
                        <input value={opisInput} type="text" placeholder="Опис" className="form-control" id="opis" onChange={(e) => {
                            setOpisInput(e.target.value)
                        }} />
                    </div>
                    <div className="iznos">
                        <input value={iznosInput} type="number" placeholder="Износ" className="form-control" id="iznos" onChange={(e) => {
                            setIznosInput(e.target.value)
                        }} />
                    </div>
                    <div className="ccc">

                        <a id="submit" type="submit" href="Form.jsx" onClick={(e) => {
                            e.preventDefault()
                            if (selectInput === 'prihod') {
                                setPrihodi((prev) => {
                                    return [...prev, {
                                        id: uuidv1(),
                                        type: selectInput,
                                        text: opisInput,
                                        price: iznosInput
                                    }]
                                })
                            } else if (selectInput === 'rashod') {
                                setRashodi((prev) => {
                                    return [...prev, {
                                        id: uuidv1(),
                                        type: selectInput,
                                        text: opisInput,
                                        price: iznosInput
                                    }]
                                })

                            }
                            setIznosInput('')
                            setOpisInput('')
                            setSelectInput('')
                        }}><i className="far fa-check-circle"></i></a>
                    </div>
                </form>
            </div >
        </section >
    )
}

export default Form

