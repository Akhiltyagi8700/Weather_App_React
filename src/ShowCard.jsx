import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./ShowCard.css";

export default function ShowCard({ Show }) {

    const INIT_URL = "https://images.unsplash.com/photo-1496450681664-3df85efbd29f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1523653049681-701d71cf57c0?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1692905262350-2d650281ae9b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1709310749399-fc68800e1c76?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className='ShowCard'>

            <div className='cardContainer'>
                <Card sx={{ maxWidth: 350 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={Show.humidity > 80 ? RAIN_URL : Show.tempMax > 18 ? HOT_URL : COLD_URL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {Show.city} {Show.humidity > 80 ? <ThunderstormIcon /> : Show.tempMax > 18 ? <WbSunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {Show.temp}&deg;C</p>
                            <p>Humidity = {Show.humidity}&deg;C</p>
                            <p>Min Temp = {Show.tempMin}&deg;C</p>
                            <p>Max Temp = {Show.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{Show.weather}</i> and feels like {Show.feels_like}&deg;C.</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
};