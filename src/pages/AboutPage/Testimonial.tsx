import { Avatar, Card, CardContent, Typography } from '@mui/material';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  content,
  avatar,
}) => (
  <Card className="w-full bg-white/80 backdrop-blur-sm shadow-lg">
    <CardContent className="flex gap-4">
      <Avatar src={avatar} className="w-12 h-12" />
      <div>
        <Typography variant="h6" className="font-medium">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mb-2">
          {role}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </div>
    </CardContent>
  </Card>
);
export default Testimonial;
