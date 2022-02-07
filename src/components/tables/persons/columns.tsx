const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
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
];

export { columns };