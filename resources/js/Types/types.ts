export interface PagePropsType {
  auth: {
    user: {
      id: number;
      name: string;
      email: string;
    };
  };
  // ziggy: any; // si tu utilises Ziggy côté React
}

export interface TeamProps {
  id: number;
  name: string;
  email: string;
}
export type MediaUploadType = 'profile' | 'cover' | 'activity-images' | 'activity-videos';
