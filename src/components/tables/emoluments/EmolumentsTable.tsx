import React, { useEffect } from 'react';
import { Input, Row, Table, Typography } from "antd";
import { useState } from "react";
import { columns } from './columns';
import { emolumentsMock } from '../../../mocks/emoluments';

const { Title } = Typography
const { Search } = Input

export const EmolumentsTable = () => {
  const [dataSource, setDataSource] = useState<any[]>([])
  const [filteredData, setFilteredDate] = useState<any[]>([])

  const onSearch = (value: string) => {
    const filteredData = dataSource.filter(
      person =>
        person.code.toLowerCase().includes(value.toLowerCase()) ||
        person.description.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredDate(filteredData)
  }

  useEffect(() => {
    setDataSource(emolumentsMock)
  }, [])

  useEffect(() => {
    setFilteredDate(dataSource)
  }, [dataSource])

  return (
    <>
      <div>
        <Row style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Title level={4}>Tabela de Emolumentos</Title>
        </Row>
        <Row style={{
          margin: '1.5rem 0',
        }}>
          <Search
            placeholder="Filtrar pelo código ou descrição"
            onChange={e => onSearch(e.target.value)}
            style={{
              maxWidth: '500px'
            }}
          />
        </Row>
        <Table
          dataSource={filteredData}
          locale={{ emptyText: 'Nenhum registro encontrado' }}
          rowKey="code"
          columns={columns}
        />
      </div >
    </>
  )
}
