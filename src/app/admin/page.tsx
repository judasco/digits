import { Col, Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import { auth } from '@/lib/auth';
import ContactCardAdmin from '@/components/ContactCardAdmin';

const AdminPage = async () => {
  const session = await auth();
  adminProtectedPage(
    session as {
      user: { email: string; id: string; name: string };
    } | null,
  );
  const contacts = await prisma.contact.findMany({
    include: { notes: true },
  });
  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1>List Contacts Admin</h1>
            <Row>
          {contacts.map((contact, index) => (
            <Col key={index} md={4} className="mb-4">
              <ContactCardAdmin contact={contact} notes={contact.notes} />
            </Col>
          ))}
        </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminPage;