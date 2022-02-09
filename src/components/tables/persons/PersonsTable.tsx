import React, { useEffect } from 'react';
import { Button, Dropdown, Input, Menu, Row, Table, Typography } from "antd";
import { DeleteOutlined, FileAddFilled, MoreOutlined } from "@ant-design/icons"
import { Person } from "../../../types/persons"
import { useContext, useState } from "react";
import { If } from "react-extras";
import { CreatePersonModal } from "../../modals";
import { PersonsContext } from "../../../contexts/persons";

const { Title } = Typography
const { Search } = Input

export const PersonsTable = () => {
  const [createPersonModal, setCreatePersonModal] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState<Person>()
  const [dataSource, setDataSource] = useState<Person[]>([])
  const [filteredData, setFilteredDate] = useState<Person[]>([])

  const { addPerson, persons, removePerson } = useContext(PersonsContext)

  const onClickDeleteButton = () => {
    if (selectedPerson?.id) {
      removePerson(selectedPerson.id);
    }
  }

  const onSearch = (value: string) => {
    const filteredData = dataSource.filter(
      person =>
        person.name.toLowerCase().includes(value.toLowerCase()) ||
        person.document.includes(value.toLowerCase())
    )
    setFilteredDate(filteredData)
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="text" icon={<DeleteOutlined />} onClick={onClickDeleteButton}>
          Excluir
        </Button>
      </Menu.Item>
    </Menu>
  )

  useEffect(() => {
    setDataSource(persons)
  }, [persons])

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
          <Title level={4}>Listagem de pessoas</Title>
          <Button
            type='primary'
            icon={<FileAddFilled />}
            onClick={() => {
              setSelectedPerson(undefined)
              setCreatePersonModal(true)
            }}
          >
            Novo
          </Button>
        </Row>
        <Row style={{
          margin: '1.5rem 0',
        }}>
          <Search
            placeholder="Filtrar pelo nome ou documento"
            onChange={e => onSearch(e.target.value)}
            style={{
              maxWidth: '500px'
            }}
          />
        </Row>
        <Table
          dataSource={filteredData}
          locale={{
            emptyText: 'Nenhum registro encontrado',
          }}
          onRow={(record: Person) => ({
            onClick: () => {
              setSelectedPerson(record)
            },
          })}
          pagination={{
            pageSize: 5,
          }}
          rowKey="id"
          columns={[
            {
              title: 'Nome',
              dataIndex: 'name',
              onCell: () => ({
                onClick: () => {
                  setCreatePersonModal(true)
                },
              }),
              render: (text: string) => <a>{text}</a>,
            },
            {
              title: 'Documento',
              dataIndex: 'document',
            },
            {
              title: 'Endereço',
              dataIndex: 'address',
            },
            {
              title: 'País',
              dataIndex: 'country',
            },
            {
              title: 'Opções',
              dataIndex: 'id',
              width: '50px',
              align: 'center' as 'center',
              render: () => (
                <Dropdown overlay={menu} trigger={['click']}>
                  <MoreOutlined />
                </Dropdown>
              )
            }
          ]}
        />
      </div >

      <If condition={createPersonModal}>
        <CreatePersonModal
          visible={createPersonModal}
          onCancel={() => setCreatePersonModal(false)}
          createPerson={addPerson}
          personId={selectedPerson?.id}
        />
      </If>
    </>
  )
}
