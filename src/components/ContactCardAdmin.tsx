'use client';

import { Card, ListGroup } from 'react-bootstrap';
import { Contact, Note } from '@prisma/client';
import NoteItem from '@/components/NoteItem';

/* Renders a single row in the List Contacts table. See list/page.tsx. */
const ContactCardAdmin = ({ contact, notes }: { contact: Contact; notes: Note[] }) => (
  <Card className="h-100">
    <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '1px solid #ddd' }}>
      <Card.Img
        variant="top"
        src={contact.image}
        style={{
          width: '75px',
          display: 'block',
        }}
      />
      <Card.Body className="text-start p-2">
        <Card.Title className="mb-1">
          {`${contact.firstName} ${contact.lastName}`}
        </Card.Title>
        <Card.Subtitle className="text-start text-muted">
          {contact.address}
        </Card.Subtitle>
      </Card.Body>
    </div>

    <Card.Body>
      <Card.Text className="text-start">
        {contact.description}
      </Card.Text> 
      <ListGroup variant="flush">
        {notes.map((note) => <NoteItem key={note.id} note={note}/>)}
      </ListGroup>
      <Card.Text className="blockquote-footer">
        {contact.owner}
      </Card.Text>
    </Card.Body>
  </Card>

);

export default ContactCardAdmin;