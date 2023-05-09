import { FC } from 'react';

import cl from './spinner.module.scss';

const Spinner: FC = () => {
  return <div className={cl.spinner}></div>;
};

export default Spinner;
