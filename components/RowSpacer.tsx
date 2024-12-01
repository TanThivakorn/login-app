import React from 'react';
import { View } from 'react-native';

const RowSpacer = ({ size }: { size: number }) => (
    <View style={{ height: size }} />
);

export default RowSpacer;