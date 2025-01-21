import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, ThemeProvider, createTheme, Select, MenuItem, SelectChangeEvent, Box, FormControl, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

interface LeaderboardProps {
  mode: string;
}

interface LeaderboardRow {
  rank: number;
  name: string;
  model: string;
  accuracy: number;
  code: string;
  paper: string;
}

interface Data {
  [key: string]: LeaderboardRow[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ mode }) => {
  const theme = createTheme({
    palette: {
      mode: mode === 'dark' ? 'dark' : 'light',
    },
  });

  const [dataset, setDataset] = useState('DS1');
  const [rows, setRows] = useState<LeaderboardRow[]>([]);
  const [data, setData] = useState<Data>({});

  useEffect(() => {
    fetch('../datasets.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        if (data[dataset]) {
          setRows(data[dataset]);
        }
      });
  }, [dataset]);

  const handleDatasetChange = (event: SelectChangeEvent<string>) => {
    const newDataset = event.target.value as string;
    setDataset(newDataset);
    if (data[newDataset]) {
      setRows(data[newDataset]);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '80%', margin: '40px auto' }}>
        <Typography variant="h1" sx={{ fontSize: '2.25rem', fontWeight: 'bold' }}>Leaderboard</Typography>&nbsp;
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TableContainer component={Paper} sx={{ flex: 1 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><b>Rank</b></TableCell>
                  <TableCell align="center"><b>Name</b></TableCell>
                  <TableCell align="center"><b>Model</b></TableCell>
                  <TableCell align="center"><b>Accuracy</b></TableCell>
                  <TableCell align="center"><b>Links</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.rank}>
                    <TableCell component="th" scope="row">
                      {row.rank}
                    </TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.model}</TableCell>
                    <TableCell align="center">{row.accuracy}</TableCell>
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
              {Object.keys(data).map((key) => (
                <MenuItem key={key} value={key}>{key}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Leaderboard;