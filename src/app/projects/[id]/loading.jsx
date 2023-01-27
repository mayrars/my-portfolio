'use client'
import { Card, Placeholder } from 'react-bootstrap'
import styles from './project.module.css'

export default function Loading () {
  return (
    <>
      <Card style={{ width: '25%' }} className={styles.card}>
        <Placeholder className={styles.image} lg={12} md={12} sm={12} />
        <Placeholder xs={3} lg={12} />
      </Card>
    </>
  )
}
