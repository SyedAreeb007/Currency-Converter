import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import currencyLogo from '../Assets/Images/currency.webp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CurrencyInput = () => {

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("pkr")
    const [info, setInfo] = useState({})
    const [options, setOptions] = useState([])
    const [output, setOutput] = useState()

    useEffect(() => {
        Axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
            .then(res => {
                setInfo(res.data[from])
            }).catch(err => console.log(err))
    }, [from])

    useEffect(() => {
        if (info) {
            setOptions(Object.keys(info))
            Convert()
        }
    }, [info, amount, to])

    const Convert = () => {
        const rate = info[to]
        setOutput(amount * rate)
    }

    return (
        <div className='converter'>
            <img className='currencyLogo' src={currencyLogo} alt="currencyLogo" />
            <h1 className='main'>Currency Converter</h1>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='left'>
                            <h4>Amount</h4>
                            <input type='text' placeholder='Enter Amount'
                                onChange={(e) => setAmount(e.target.value)} />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='middle'>
                            <h4>From</h4>
                            <select onChange={(e) => setFrom(e.target.value)} value={from}>
                                {options.map(o => (
                                    <option key={o} value={o}>{o}</option>
                                ))}
                            </select>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='right'>
                            <h4>To</h4>
                            <select onChange={(e) => setTo(e.target.value)} value={to}>
                                {options.map(o => (
                                    <option key={o} value={o}>{o}</option>
                                ))}
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className='result'>
                            <h4>Converted Amount</h4>
                            <h5>{amount + " " + from + " = " + output + " " + to}</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CurrencyInput
