import React from 'react'; 
import axios from 'axios'; 


class Payment extends React.Component{
    constructor(){
        super();

        this.paymentHandler = this.paymentHandler.bind(this);

    }
    paymentHandler = async (event)=>{
        event.preventDefault();
        var API_URL = 'http://localhost:9015/v1/';
        var orderUrl = `${API_URL}orders`;
        const response = await axios.get(orderUrl);
        const { data } = response;
        const options = {
            key: "rzp_test_8EbLeRhA0jRrzE",
            name: "Tutor World",
            description: "Payment for Tutor World Registration",
            order_id: data.id,
            handler: async (response) =>{
                try{
                    const paymentId = response.razorpay_payment_id;
                    const url = `${API_URL}capture`;
                    const captureResponse = await axios.post(url, {paymentId: response.razorpay_payment_id});
                    console.log('capture', captureResponse);
                    if(typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id < 1){
                        alert('Payment failed, please try again')
                        console.log('Payment failed, please try again')
                    }
                    else {
                        // alert('payment is successfull, please login to see the Tutors list')
                        // console.log(localStorage.getItem('userdetails'));
                        // var registering_user = JSON.parse(localStorage.getItem('userdetails')); 
                        // console.log(registering_user);
                        axios.post("http://localhost:9012/v1/parent/register", JSON.parse(localStorage.getItem('userdetails'))).then(
                            (response)=>{
                                    if(response.data.status){
                                        var token = localStorage.setItem('token', response.data.token)
                                            this.props.history.push('/Getalltutors')
                                            localStorage.removeItem('userdetails');
                                    }
                            }).catch((err)=>{
                                if(err.response.status === 409){
                                    // console.log(err);
                                    console.log(err.response);
                                    // console.log(err.response.data.description);
                                    alert(err.response.data.description, 'And the payment will be refunded with in 3 to 5 days');
                                }
                                if(err.response.status === 500){
                                    console.log(err.response);
                                    alert('* indicated fields are required')
                                }  
                        
                            })           
                    }
                }
                catch(err){
                    console.log(err);
                }
            },
            theme: {
                color: "#686CFD",
            },
        }
        const rzp1 = new window.Razorpay(options);
        rzp1.open();

    }
    
    
    render(){
        return(
            <React.Fragment>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                         <li class="breadcrumb-item active" aria-current="page">Tutor World payment page</li>
                    </ol>
                </nav>
                <div class="row">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-header">
                                Order Details
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Paymet towards Tutors World Registration</h4>
                                <button class="btn btn-info" onClick={this.paymentHandler}>Pay ₹500</button>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Payment;