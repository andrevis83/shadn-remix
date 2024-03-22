import {
  Buttons,
  ButtonsError,
  ButtonsLink,
  ButtonsOutline,
  ButtonsSecondary,
  ButtonsSuccess,
} from './sections';

export default function ButtonsPage() {
  return (
    <>
      <Buttons />
      <ButtonsSecondary />
      <ButtonsOutline />
      <ButtonsError />
      <ButtonsSuccess />
      <ButtonsLink />
    </>
  );
}
