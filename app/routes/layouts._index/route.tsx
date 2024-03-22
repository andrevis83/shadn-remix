import { Container } from '~/common/Container';
import ContainerSection from './Container/Containers';
import FlexSections from './Flex';
import GridSections from './Grid';

export default function Layouts() {
  return (
    <>
      <ContainerSection />
      <Container maxWidth="sm">
        <FlexSections />
        <GridSections />
      </Container>
    </>
  );
}
