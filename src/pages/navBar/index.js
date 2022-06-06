import React from 'react'

const NavBar = ({product, clearProd}) => {
  const totalPriceProd = product.reduce((acc, current) => acc + current.price, 0)
    return (
        <header>
      <nav>
        <h2 className='logo'>Pro<span className='logo-bold'>dutos</span></h2>
        <div className='nav-bar-actions'>
          <div className='nav-bar-total'>
            <span className='nav-bar-total-quantity'>
            {product.length } &nbsp;
            {product.length <= 1 ? 'Produto' : 'Produtos'}
            </span>
           <span className='nav-bar-total-price'>
             R$ {totalPriceProd.toFixed(2)}
             </span>
          </div>
          <button className='clean-btn' onClick={() => clearProd()} >LIMPAR</button>
        </div>
      </nav>
    </header>
    )
}

export default NavBar
