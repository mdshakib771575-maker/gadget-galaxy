import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
    <div className="flex h-screen items-center justify-center">
    <Spinner color="current" size="xl" />
    </div>
  );
};

export default loading;