import { Schema, model } from 'mongoose';
import { type ILikeDocument } from '../interfaces';

const LikeSchema = new Schema<ILikeDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    faceId: {
      type: Schema.Types.ObjectId,
      ref: 'Face',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default model<ILikeDocument>('Like', LikeSchema);
