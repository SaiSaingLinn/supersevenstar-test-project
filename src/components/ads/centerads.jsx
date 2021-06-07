import React from 'react'
import CustomPlaceholder from '../fakeimg'
import { Section, Container, Row, Col } from '../../components'
import colors from '../constant/Color'

const CenterAds = props => {
  const tmp = {
    ...props,
    height: 150,
    backgroundColor: colors.light,
    text: 'ADS - 1170 x 250',
  }
  return (
    <Section className="center-ads" style={{ padding: 0 }}>
      <Container>
        <Row>
          <Col space="12">
            <CustomPlaceholder {...tmp} />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default CenterAds
