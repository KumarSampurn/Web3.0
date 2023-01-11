import React,{useContext} from "react";
import {TransactionContext} from '../context/TransactionContext';
import dummyData from "../utils/dummyData"
const Transaction =() =>{
    const {currentAccount} = useContext(TransactionContext);
    return(
        <div className="flex w-full jusitfy-center items-center 2xl:px-20 gradient-bg-transaction">
            <div className="flex flex-col md:p-12 py-12  px-4 ">
                {currentAccount ?(
                    <h3 className="text-white text-3xl text-center my-2">Latest Transaction</h3>
                ):(
                    <h3 className="text-white text-3xl text-center my-2">Connect your account to See latest transaction </h3>
                )}
            </div>
        </div>
    )
}

export default Transaction;