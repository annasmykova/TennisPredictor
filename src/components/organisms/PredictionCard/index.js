import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { CountrySelectList, HandEnum, ProfyStatus, SexEnum } from '../../../utils/constants/constants';
import { PredictionSearchField, Avatar } from 'components'
import { connect } from 'react-redux';
import { fromPlayer } from 'store/selectors'
import Grid from '@material-ui/core/Grid';
import {
  PieChart, Pie, Tooltip, Cell,
} from 'recharts';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const PredictionCard = props => {
  const classes = useStyles();
  const { player, otherPlayer, result } = props;
  const data = result ? [
      { name: 'Win', value: result.win },
      { name: 'Loss', value: result.lose },
    ] : []

  const COLORS = ['#86C10F', '#CC2427'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="prediction-card">
      <div className="prediction-card-search-field">
        <PredictionSearchField player={player}/>
      </div>
      {
        player &&
        <div className="prediction-card__prediction">
          <Grid container spacing={2}>
            <Grid item xs/>
            <Grid item xs>
              <Typography gutterBottom>
                {player.firstName + ' ' + player.lastName}
              </Typography>
              <Avatar photo={player.photo}/>
              {otherPlayer
               ? <Typography gutterBottom>
                 {+result.win <= +result.lose ? 'Loser' : 'Winner'}
               </Typography>
               : ''
              }
            </Grid>
            <Grid item xs>{
              data.length
                ? <PieChart width={220} height={220}>
                  <Pie
                    data={data}
                    cx={100}
                    cy={100}
                    startAngle={90}
                    endAngle={450}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                  >
                    {
                      data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                    }
                  </Pie>
                  <Tooltip />
                </PieChart>
                : ''
            }</Grid>
            <Grid item xs>
              <Typography gutterBottom>
                {otherPlayer ? <NavLink className="link-default" to={`/player/${otherPlayer.id}`}>
                  {otherPlayer.firstName + ' ' + otherPlayer.lastName}
                </NavLink> : 'Other Player'}
              </Typography>
              <Avatar photo={otherPlayer ? otherPlayer.photo : null}/>
              {otherPlayer
               ? <Typography gutterBottom className={'loser'}>
                 {+result.win > +result.lose ? 'Loser' : 'Winner'}
               </Typography>
               : ''
              }
            </Grid>
          </Grid>
        </div>
      }
      {
        player &&
        <div className="prediction-card__users-wrapper">
          <TableContainer className="custom-table" component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell component="th"/>
                  <TableCell component="th" align="center">{player.firstName} {player.lastName}</TableCell>
                  <TableCell component="th"/>
                  <TableCell component="th"
                    align="center">{otherPlayer ? otherPlayer.firstName + ' ' + otherPlayer.lastName : '-'}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Position</TableCell>
                  <TableCell align="center">{player.position || '-'}</TableCell>
                  <TableCell/>
                  <TableCell align="center">{otherPlayer ? otherPlayer.position || '-' : '-'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gender</TableCell>
                  <TableCell align="center">{SexEnum[player.gender] || '-'}</TableCell>
                  <TableCell/>
                  <TableCell align="center">{otherPlayer ? SexEnum[otherPlayer.gender] || '-' : '-'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Date of Birth</TableCell>
                  <TableCell align="center">{player.dob ? new Date(player.dob).toLocaleDateString() || '-' : '-'}</TableCell>
                  <TableCell/>
                  <TableCell align="center">{
                    otherPlayer ? new Date(otherPlayer.dob).toLocaleDateString() || '-' : '-'
                  }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hand</TableCell>
                  <TableCell align="center">{player.hand ? HandEnum[player.hand] || '-' : '-'}</TableCell>
                  <TableCell/>
                  <TableCell align="center">{otherPlayer ? HandEnum[otherPlayer.hand] || '-' : '-'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Professional Status</TableCell>
                  <TableCell align="center">{ProfyStatus[player.profyStatus] || '-'}</TableCell>
                  <TableCell/>
                  <TableCell align="center">{otherPlayer ? ProfyStatus[otherPlayer.profyStatus] || '-' : '-'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Coach</TableCell>
                  <TableCell align="center">
                    {
                      player.coach
                        ? <NavLink className="link-default" to={`/coach/${player.coach.id}`}>
                          {player.coach.text}
                        </NavLink>
                        : '-'
                    }

                  </TableCell>
                  <TableCell/>
                  <TableCell align="center">
                    {
                      otherPlayer && otherPlayer.coach
                      ? <NavLink className="link-default" to={`/coach/${otherPlayer.coach.id}`}>
                        {otherPlayer.coach.text}
                      </NavLink>
                      : '-'
                    }
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Country</TableCell>
                  <TableCell align="center">{player.country ? CountrySelectList[player.country] : '-'}</TableCell>
                  <TableCell/>
                  <TableCell align="center">{otherPlayer && otherPlayer.country ? CountrySelectList[otherPlayer.country] : '-'}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      }
    </div>
  )
}

export default connect(state => ({
  otherPlayer: fromPlayer.getPredictionOtherPlayer(state),
  result: fromPlayer.getPredictionResult(state)
}))(PredictionCard)
