
import { useState } from 'react';
import {Card, CardHeader, CardContent, CardActions, TextField, Button, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel, Slider,
    Select, MenuItem, InputLabel, Rating, Typography, Box} from '@mui/material';

function GuerrerosForm({ onCreateGuerrero = () => {} }) {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('Orco');
  const [nivel, setNivel] = useState(1);
  const [categoria, setCategoria] = useState('Capitán');
  const [furia, setFuria] = useState(1);

  const limpiarFormulario = () => {
    setNombre('');
    setTipo('Orco');
    setNivel(1);
    setCategoria('Capitán');
    setFuria(1);
  };

  const handleCreate = () => {
    const nuevoGuerrero = {
      nombre,
      tipo,
      nivel,
      categoria,
      furia
    };

    onCreateGuerrero(nuevoGuerrero);
    limpiarFormulario();
  };

  return (
    <Card>
      <CardHeader title="Ingresar Guerrero" />

      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            label="Nombre del Guerrero"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            fullWidth
          />

          <FormControl>
            <FormLabel>Tipo de Guerrero</FormLabel>

            <RadioGroup
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              row
            >
              <FormControlLabel
                value="Orco"
                control={<Radio />}
                label="Orco"
              />
              <FormControlLabel
                value="Uruk"
                control={<Radio />}
                label="Uruk"
              />
            </RadioGroup>
          </FormControl>

          <Box>
            <Typography gutterBottom>
              Nivel de Combate: {nivel}
            </Typography>

            <Slider
              value={nivel}
              onChange={(_e, valor) => setNivel(valor)}
              min={1}
              max={100}
              step={1}
              marks={[
                { value: 1, label: '1' },
                { value: 100, label: '100' }
              ]}
              valueLabelDisplay="auto"
            />
          </Box>

          <FormControl fullWidth>
            <InputLabel id="categoria-label">
              Categoría / Rango
            </InputLabel>

            <Select
              labelId="categoria-label"
              value={categoria}
              label="Categoría / Rango"
              onChange={(e) => setCategoria(e.target.value)}
            >
              <MenuItem value="Capitán">Capitán</MenuItem>
              <MenuItem value="Berserker">Berserker</MenuItem>
              <MenuItem value="Explorador">Explorador</MenuItem>
              <MenuItem value="Asediador">Asediador</MenuItem>
            </Select>
          </FormControl>

          <Box>
            <Typography gutterBottom>
              Nivel de Amenaza / Furia
            </Typography>

            <Rating
              value={furia}
              onChange={(_e, valor) => {
                if (valor !== null && valor >= 1) {
                  setFuria(valor);
                }
              }}
              min={1}
              max={5}
            />
          </Box>
        </Box>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          fullWidth
          onClick={handleCreate}
        >
          Registrar Guerrero
        </Button>
      </CardActions>
    </Card>
  );
}
export default GuerrerosForm;




