import React from 'react'

import styles from '../styles/Username.module.css'

//formik and react-hot-toast will help us in validating and  displaying the error messages and success messages
import { Toaster } from 'react-hot-toast'




function Recovery() {

  

  return (
    <div className='container mx-auto'>

      {/* placing the toast */}
      <Toaster position='top-center' reverseOrder={false} />

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>
          
          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>Recovery!</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter OTP to recover password.
            </span>
          </div>

          <form className='pt-20'>

            <div className='textbox flex flex-col items-center gap-6'>

              <div className='input text-center'>
                <span className='py-4 text-sm text-left text-gray-500'>
                  Enter OTP sent to your E-mail.
                </span>
                <input className={styles.textbox} type='text' placeholder='OTP'/>
              </div>

              <button className={styles.btn} type='submit'>Recover</button>
            </div>

            <div className='text-center py-4'>
              <span className='text-gray-500'>Can't get OTP? <button className='text-red-500'> Recover Now</button></span>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Recovery