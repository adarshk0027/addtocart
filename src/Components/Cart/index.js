import React, { useState, useContext } from 'react'
import { Delete } from '@material-ui/icons'
import { CartProductContext } from '../context'
import './index.css'
function My_Cart () {
  const { Cart, OnAdd, OnSub, OnDel } = useContext(CartProductContext)
  return (
    <div className='cartBackground bg-light  rounded w-50 mx-auto'>
      <div className='cartEl'>
        <ul>
          {Cart ? (
            Cart.map(item => {
              return (
                <li className='list-unstyled my-3'>
                  <small>{item.Product}</small>{' '}
                  <span className='text-left'>
                    <button
                      onClick={() => {
                        OnSub(item.id)
                      }}
                    >
                      -
                    </button>
                    {item.qty}
                    
                    <button  onClick={() => OnAdd(item.id)}>+</button>
                    <button
                    className='Left'
                      onClick={() => {
                        OnDel(item.id)
                      }}
                    >
                      <Delete />
                    </button>
                  </span>
                </li>
              )
            })
          ) : (
            <li className='text-red-600'>Cart Is Not Added Yet</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default My_Cart
