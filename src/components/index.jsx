import { lazy } from 'react'

import {
  Main,
  Section,
  Container,
  Row,
  Col,
  View,
  Text,
  Input,
  Title,
  Desc,
  Button,
  Quantity,
  Image,
  InputGroup, 
  Label, 
  Span, 
  Error, 
  ErrorMessage, 
  StyledCheckBox
} from './core'

export * from './core'
export * from './constant'
export * from './Loading'

// product card
const ProductCard = lazy(() => import('./card/productcard'))

// modal
const Modal = lazy(() => import('./modal/modal'))

// product slider
const ProductSlider = lazy(() => import('./slider/productslider'))

// form
const TextInput = lazy(() => import('./form/input'))
const Select = lazy(() => import('./form/select'))
const TextArea = lazy(() => import('./form/textarea'))
const CheckBox = lazy(() => import('./form/checkbox'))
const DatePickerField = lazy(() => import('./form/datepicker'))

// Ads
const Advertisement = lazy(() => import('./ads'))

const Components = {
  Modal,
  ProductCard,
  ProductSlider,
  TextInput,
  Select,
  TextArea,
  CheckBox,
  DatePickerField,
  Advertisement,

  // grid
  Main, 
  Section, 
  Container, 
  Row, 
  Col,
  View,
  Text,
  Title,
  Desc,
  Button,
  Quantity,
  Image,
  InputGroup,
  Input,
  Label, 
  Span, 
  Error, 
  ErrorMessage, 
  StyledCheckBox,
}

export default Components
