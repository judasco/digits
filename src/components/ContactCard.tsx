'use client';

import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { Contact } from '@prisma/client';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ firstName, lastName, address, image, description, id }: Contact) => (
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
      <Card.Footer>
  <Link href={`edit/${id}`}>Edit</Link>
</Card.Footer>
    </div>

    <Card.Body>
      <Card.Text className="text-start">
        {description}
      </Card.Text>
    </Card.Body>
  </Card>

);

export default ContactCard;