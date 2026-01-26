import React from 'react'

interface Props {
    name: string

}

const SecondComponent = (props: Props) => {
    return (
        <div><h1>Segundo componente</h1>
        <p>O nomde dele é: {props.name}</p></div>
    )
}

export default SecondComponent