import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ThemeProvider,
  createTheme,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  FormControl,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

interface LeaderboardProps {
  mode: string;
}

interface LeaderboardRow {
  name: string;
  model: string;
  accuracy: number;
  code: string;
  paper: string;
  id: number;
}

interface Result {
  name: string;
  model: string;
  code: string;
  paper: string;
  performance: { [key: string]: number };
}

interface Data {
  results: Result[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ mode }) => {
  const theme = createTheme({
    palette: {
      mode: mode === 'dark' ? 'dark' : 'light',
    },
  });

  const [dataset, setDataset] = useState('DS1');
  const [data, setData] = useState<Data>({ results: [] });
  const [rows, setRows] = useState<LeaderboardRow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../datasets.json');
        const data: Data = await response.json();
        setData(data);
        if (data.results.length > 0) {
          const rows = data.results
            .map((result: Result, index: number) => ({
              id: index + 1,
              name: result.name,
              model: result.model,
              accuracy: result.performance[dataset],
              code: result.code,
              paper: result.paper,
            }))
            .sort((a: LeaderboardRow, b: LeaderboardRow) => b.accuracy - a.accuracy);
          setRows(rows);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dataset]);

  const handleDatasetChange = (event: SelectChangeEvent<string>) => {
    const newDataset = event.target.value as string;
    setDataset(newDataset);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '80%', margin: '40px auto' }}>
        <Typography variant="h1" sx={{ fontSize: '2.25rem', fontWeight: 'bold' }}>
          Leaderboard
        </Typography>
        &nbsp;
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TableContainer component={Paper} sx={{ flex: 1 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" id="leaderboard">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <b>Name</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Model</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Accuracy</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Links</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.model}</TableCell>
                    <TableCell align="center">{(row.accuracy).toFixed(2)}</TableCell>
                    <TableCell align="center">
                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                        <a href={row.code} target="_blank" rel="noopener noreferrer">
                          <GitHubIcon fontSize="small" />
                        </a>
                        <a href={row.paper} target="_blank" rel="noopener noreferrer">
                          <DescriptionIcon fontSize="small" />
                        </a>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <FormControl sx={{ marginLeft: 2 }}>
            <Select value={dataset} onChange={handleDatasetChange}>
              {data.results.length > 0 &&
                Object.keys(data.results[0].performance).map((key) => (
                  <MenuItem key={key} value={key}>
                    {key}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Leaderboard;