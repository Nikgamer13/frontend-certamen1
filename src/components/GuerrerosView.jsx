
import {
  Card,
  CardHeader,
  CardContent,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Chip,
  Button,
  Alert
} from '@mui/material';

function GuerrerosView({ guerreros = [], onQuitar = () => {} }) {
  return (
    <Card>
      <CardHeader title="Despliegue del Ejército" />

      <CardContent>
        {guerreros.length === 0 ? (
          <Alert severity="info">
            No hay guerreros registrados en el ejército.
          </Alert>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre del Guerrero</TableCell>
                  <TableCell>Tipo de Guerrero</TableCell>
                  <TableCell>Categoría / Rango</TableCell>
                  <TableCell>Nivel</TableCell>
                  <TableCell>Clasificación</TableCell>
                  <TableCell>Acción</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {guerreros.map((guerrero) => (
                  <TableRow key={guerrero.id}>
                    <TableCell>{guerrero.nombre}</TableCell>
                    <TableCell>{guerrero.tipo}</TableCell>
                    <TableCell>{guerrero.categoria}</TableCell>
                    <TableCell>{guerrero.nivel}</TableCell>

                    <TableCell>
                      <Chip
                        label={guerrero.tipo}
                        color={
                          guerrero.tipo === 'Orco'
                            ? 'success'
                            : 'error'
                        }
                      />
                    </TableCell>

                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => onQuitar(guerrero)}
                      >
                        Asesinado por la aparición
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </CardContent>
    </Card>
  );
}

export default GuerrerosView;
