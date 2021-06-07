import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../core'
import { CardDiv, BackgroundImage, ProductCardWrap } from '../card/style/cardstyle'
import Components, { Row, Col } from 'components'

const ProductCard = ({ product_data, link, col }) => {
  return (
    <ProductCardWrap>
      <Row>
        {product_data?.data?.product_list.length ?
          product_data?.data?.product_list?.map(list => (
            <Col md={col} className="product-col" key={list.product_id}>
              <Link to={`${link}/${list?.product_id}`}>
                <CardDiv product>
                  <div className="card-wrap">
                    <BackgroundImage data={list?.product_image || require('../../assets/img/sedan-car-front.svg').default} />
                    <div className="content">
                      <Text weight="lg" className="product-name">{list?.name}</Text>
                      <div className="price">
                        <span>{list?.list_price} Ks</span>
                        {/* <del>{x.discount_price}</del> */}
                      </div>
                    </div>
                  </div>
                </CardDiv>
              </Link>
            </Col>
          ))
          :
          <Components.NoResult result='No Result Found' />
        }
      </Row>
    </ProductCardWrap>
  )
}

export default ProductCard