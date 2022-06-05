import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ModalInfo {
  opened: boolean;
  info?: any;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  onModalOpen: BehaviorSubject<ModalInfo> = new BehaviorSubject<ModalInfo>({opened: false});
  constructor() { }
}
