import { BookOutlined, SearchOutlined } from "@ant-design/icons"
import { Button, Card } from "antd"
import { useRouter } from "next/router"

export const CardsOptions = () => {

  const router = useRouter()

  const onClick = () => {
    router.push('/registrocivil/nascimento')
  }

  return (
    <div>
      <Button
        block
        icon={<BookOutlined />}
        onClick={onClick}
        style={{ width: 240, height: 120, marginRight: 8 }}
      >
        Criar
      </Button>
      <Button
        block
        icon={<SearchOutlined />}
        onClick={onClick}
        style={{ width: 240, height: 120 }}
      >
        Análises
      </Button>
    </div>
  )
}