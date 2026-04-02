'use client';

import { Card } from 'react-bootstrap';
import { Contact } from '@prisma/client';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCardAdmin = ({ firstName, lastName, address, image, description, owner }: Contact) => (
  <Card className="h-100">
    <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '1px solid #ddd' }}>
      <Card.Img
        variant="top"
        src={image}
        style={{
          width: '75px',
          display: 'block',
        }}
      />
      <Card.Body className="text-start p-2">
        <Card.Title className="mb-1">
          {`${firstName} ${lastName}`}
        </Card.Title>
        <Card.Subtitle className="text-start text-muted">
          {address}
        </Card.Subtitle>
      </Card.Body>
    </div>

    <Card.Body>
      <Card.Text className="text-start">
        {description}
      </Card.Text> 
      <Card.Text className="blockquote-footer">
        {owner}
      </Card.Text>
    </Card.Body>
  </Card>

);

export default ContactCardAdmin;