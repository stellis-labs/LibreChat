import { atom } from 'recoil';
import { TPreset } from 'librechat-data-provider';

const presets = atom<TPreset[]>({
  key: 'presets',
  default: [],
});

const preset = atom<TPreset | null>({
  key: 'preset',
  default: null,
});

const defaultPreset = atom<TPreset | any>({
  key: 'defaultPreset',
  default: {
    "_id": "67290a4652ee665d430990d0",
    "presetId": "b168d529-0555-4d44-8bd1-c318f91f29ea",
    "user": "6724f8f46be5fe34252f4594",
    "__v": 0,
    "agentOptions": null,
    "createdAt": "2024-11-04T17:54:14.630Z",
    "endpoint": "openAI",
    "examples": [],
    "imageDetail": "low",
    "isArchived": false,
    "model": "chatgpt-4o-latest",
    "promptPrefix": "Analyze me resume!",
    "resendFiles": false,
    "tags": [],
    "temperature": 0.34,
    "title": "Resume Bot",
    "top_p": 0.44,
    "updatedAt": "2024-11-04T17:54:14.630Z"
},
});

const presetModalVisible = atom<boolean>({
  key: 'presetModalVisible',
  default: false,
});

export default {
  preset,
  presets,
  defaultPreset,
  presetModalVisible,
};
