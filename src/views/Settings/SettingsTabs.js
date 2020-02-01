import React from 'react';
// import 'antd/dist/antd.css';
import 'antd/lib/tabs/style/index.css';
import Tabs from 'antd/lib/tabs';

import { SettingsPersonal } from './SettingsPersonal';
import { SettingsGeneral } from './SettingsGeneral';
import StyledSettings from './SettingsStyles';

import {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
} from '../../state/actions/notificationActions';
import Notification from '../../components/Notifications/Notification';
import { connect } from 'react-redux';
import { updateUserInfo } from '../../state/actions/settingActions';

const { TabPane } = Tabs;

export function SettingsTabs(props) {
  const {
    user,
    updateUserInfo,
    success,
    error,
    showErrorMessage,
    showSuccessMessage,
    closeMessage,
  } = props;
  return (
    <StyledSettings className='setting-container'>
      <Tabs defaultActiveKey='personal Information'>
        <TabPane
          tab='Personal Information'
          key='Personal Information'
        >
          <SettingsPersonal
            user={user}
            updateUserInfo={updateUserInfo}
            Notification={Notification}
            showErrorMessage={showErrorMessage}
            showSuccessMessage={showSuccessMessage}
            closeMessage={closeMessage}
            success={success}
            error={error}
          />
        </TabPane>
        <TabPane tab='General Settings' key='General Settings'>
          <SettingsGeneral
            user={user}
            updateUserInfo={updateUserInfo}
            Notification={Notification}
            showErrorMessage={showErrorMessage}
            showSuccessMessage={showSuccessMessage}
            closeMessage={closeMessage}
            success={success}
            error={error}
          />
        </TabPane>
      </Tabs>
    </StyledSettings>
  );
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  success: state.notificationsReducer.success,
  error: state.notificationsReducer.error,
});

export default connect(mapStateToProps, {
  updateUserInfo,
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
  SettingsPersonal,
  SettingsGeneral,
})(SettingsTabs);
