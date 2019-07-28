declare module 'react-native-signature-capture' {
  import * as React from "react";
  import { ViewProps } from "react-native";

  export interface SignatureCaptureSaveEvent {
    pathName: string;
    encoded: string;
  }

  export interface SignatureCaptureDragEvent {
    dragged: boolean;
  }

  export interface SignatureCaptureProps extends ViewProps {
    rotateClockwise?: boolean;
    square?: boolean;
    saveImageFileInExtStorage?: boolean;
    viewMode?: "portrait" | "landscape";
    showBorder?: boolean;
    showNativeButtons?: boolean;
    showTitleLabel?: boolean;
    maxSize?: number;
    onSaveEvent?(event: SignatureCaptureSaveEvent): any;
    onDragEvent?(event: SignatureCaptureDragEvent): any;
  }

  export default class SignatureCapture extends React.Component<SignatureCaptureProps> {
    saveImage(): void;
    resetImage(): void;
  }
}
