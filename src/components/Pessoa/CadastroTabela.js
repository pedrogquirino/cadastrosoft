import React from 'react';
import { Grommet } from '@bit/grommet.grommet.grommet';
import { grommet } from '@bit/grommet.grommet.themes';
import { Box } from '@bit/grommet.grommet.box';
import { DataTable } from '@bit/grommet.grommet.data-table';
import { Text } from '@bit/grommet.grommet.text';

const columns = [
    {
        property: 'id',
        header: <Text>Id</Text>,
    },
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
        align:'center'
    },
    {
        property: 'naturalidade',
        header: 'Naturalidade'
    },
    {
        property: 'dataNascimento',
        header: 'Data de nascimento',
        // render: datum =>
        //     datum.date && new Date(datum.date).toLocaleDateString('en-US'),
        align: 'center'
    }
  ];

const CadastroPessoaTabela = props => {

    return (
        <Grommet theme={grommet}>
        <Box align='center' pad='small'>             
            <DataTable
            columns={columns.map(c => ({
                ...c,
                search: c.property === 'id' || c.property === 'nome' || c.property === 'naturalidade' || c.property === 'nacionalidade' || c.property === 'dataNascimento'
            }))}
            data= {props.dados}
            sortable
            resizeable
            />
        </Box>
        </Grommet>
    );
}

export default CadastroPessoaTabela;