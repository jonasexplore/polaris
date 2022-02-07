import { Button, Row, Table, Typography } from "antd";
import { FileAddFilled } from "@ant-design/icons"
import { Person } from "../../../types/persons"
import { columns } from "./columns";
import { useState } from "react";
import { If } from "react-extras";
import { CreatePersonModal } from "../../modals";

type personTableProps = {
  persons: Array<Person>
}

const { Title } = Typography

const PersonsTable = ({ persons }: personTableProps) => {
  const [createPersonModal, setCreatePersonModal] = useState(false)

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
            onClick={() => setCreatePersonModal(true)}
          >
            Novo
          </Button>
        </Row>
        <Row>

        </Row>
        <Table
          columns={columns}
          dataSource={persons}
        />
      </div >

      <If condition={createPersonModal}>
        <CreatePersonModal
          visible={createPersonModal}
          onCancel={() => setCreatePersonModal(false)}
        />
      </If>
    </>
  )
}

export { PersonsTable }