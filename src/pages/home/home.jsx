import React, { useState, useEffect } from 'react'
import Components, { Button } from '../../components'
import { adsKey } from '../../key'
import { BsFillCaretUpFill, BsCaretDownFill } from 'react-icons/bs'

const group_data = [
  {
    id: 1,
    name: "Back-to-Black Heavy Duty Trim Cleaner Kit",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 2,
    name: "Back-to-Black Tire Shine",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 3,
    name: "Back-to-Black Trim & Plastic Restorer",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 4,
    name: "Trim & Plastic Restorer - Aerosol",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 5,
    name: "Trim & Plastic Restorer - Aerosol",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 6,
    name: "Back-to-Black Heavy Duty Trim Cleaner Kit",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 7,
    name: "Back-to-Black Tire Shine",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 8,
    name: "Back-to-Black Trim & Plastic Restorer",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 9,
    name: "Back-to-Black Heavy Duty Trim Cleaner Kit",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 10,
    name: "Back-to-Black Tire Shine",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 13,
    name: "Back-to-Black Trim & Plastic Restorer",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 14,
    name: "Trim & Plastic Restorer - Aerosol",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 15,
    name: "Trim & Plastic Restorer - Aerosol",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 16,
    name: "Back-to-Black Heavy Duty Trim Cleaner Kit",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 17,
    name: "Back-to-Black Tire Shine",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  },
  {
    id: 18,
    name: "Back-to-Black Trim & Plastic Restorer",
    list_price: 28000,
    discount_price: 35000,
    product_image: false
  }
]

const { center_ads, home_ads } = adsKey

const Home = () => {  
  const [ num, setNum ] = useState(0)
  // handle modal 
  const [state, setState] = useState({
    isModal: false,
    msg: null,
  })

  const [isSetTimeOut, setIsSetTimeOut] = useState(false)

  useEffect(() => {
    state.isModal === false && setIsSetTimeOut(false)
  }, [state.isModal])

  const handleAddToCart = () => {
    handleIsModal(true, 'Your product add to cart successful')
    setIsSetTimeOut(true)
  }

  const handleIsModal = (isModal, msg) => {
    setState({
      ...state,
      isModal,
      msg
    })
  }
  // end handle modal

  // Qty change
  const handleQty = (key, qty) => () => {
    // let num = qty
    if (key === 'add') {
      setNum(num + 1)
    } else {
      if (num > 1) {
        setNum(num - 1)
      }
    }
  }

  return (
    <>
      <Components.Advertisement position_code={center_ads} page_code={home_ads} onClick={() => handleAddToCart()}/>
      <Components.Modal data={{ isModal: state.isModal, handleIsModal, isSetTimeOut }}>
        <div className="modal-body">
          {/* <div className='success-title'>
            <img src={require("../../assets/img/icons/add-to-cart.svg").default} alt="" />
          </div> */}
          <Components.Quantity>
            <Components.View as="div" className="quantity-wrap">
              <Components.Text as="label">Quantity</Components.Text>
              <Components.InputGroup className="mb-0 quantity-input-gp">
                <Components.Input value={num} />
                <Components.Text as="div" className="arrow-btn">
                  <BsFillCaretUpFill 
                    onClick={
                      handleQty('add')
                    }
                  />
                  <BsCaretDownFill 
                    onClick={
                      handleQty('sub')
                    }/>
                </Components.Text>
              </Components.InputGroup>
              
            </Components.View>
            <Components.Button className="btn btn-default" onClick={() => handleAddToCart()}>ADD TO CART</Components.Button>
          </Components.Quantity>
        </div>
      </Components.Modal>

      {group_data?.length > 0 && // latest product section
        <Components.Section>
          <Components.Container>
            <Components.ProductSlider
              data={group_data}
              link="product-detail" />
          </Components.Container>
        </Components.Section>
      }
    </>
  )
}

export default Home