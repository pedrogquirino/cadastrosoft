import React from 'react';
import { Grommet } from '@bit/grommet.grommet.grommet';
import { grommet } from '@bit/grommet.grommet.themes';
import { Box } from '@bit/grommet.grommet.box';
import { DataTable } from '@bit/grommet.grommet.data-table';
import { Text } from '@bit/grommet.grommet.text';

const DATA = [
    {
        nome: 'Pedro Gomes'   ,
        email: "donsonight@gmail.com",
        nacionalidade: 'Brasileira',
        naturalidade: 'Campina Grande',
        dataNascimento: '1983-08-26'
    },
    {
        nome: 'Pedro Gomes'   ,
        email: "donsonight@gmail.com",
        nacionalidade: 'Brasileira',
        naturalidade: 'Campina Grande',
        dataNascimento: '1983-08-26'    
    },
    {
        nome: 'Pedro Gomes'   ,
        email: "donsonight@gmail.com",
        nacionalidade: 'Brasileira',
        naturalidade: 'Campina Grande',
        dataNascimento: '1983-08-26'    
    }
]

const columns = [
    {
        property: 'nome',
        header: <Text>Nome</Text>,
    },
    {
        property: 'email',
        header: 'Email'
    },
    {
        property: 'nacionalidade',
        header: <Text>Nacionalidade</Text>,
    },
    {
        property: 'naturalidade',
        header: 'Naturalidade'
    },
    {
        property: 'dataNascimento',
        header: 'Data de nascimento',
        render: datum =>
            datum.date && new Date(datum.date).toLocaleDateString('en-US'),
        align: 'end'
    }
  ];


  const FormLista = () => (
    <Grommet theme={grommet}>
      <Box align='center' pad='large'>
        <DataTable
          columns={columns.map(c => ({
            ...c,
            search: c.property === 'nome' || c.property === 'naturalidade' || c.property === 'nacionalidade'
          }))}
          data={DATA}
          sortable
          resizeable
        />
      </Box>
    </Grommet>
  );

export default FormLista;