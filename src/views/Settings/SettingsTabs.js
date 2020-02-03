import React from 'react';
import 'antd/lib/tabs/style/index.css';
import Tabs from 'antd/lib/tabs';
import { connect } from 'react-redux';
import { SettingsPersonal } from './SettingsPersonal';
import { SettingsGeneral } from './SettingsGeneral';
import StyledSettings from './SettingsStyles';
import {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
} from '../../state/actions/notificationActions';
import Notification from '../../components/Notifications/Notification';
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
    updateError,
  } = props;
  const handleCancel = e => {
    e.preventDefault();
    props.history.push('/dashboard');
  };

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
            updateErrorMessage={updateError}
            error={error}
            handleCancel={handleCancel}
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
            updateErrorMessage={updateError}
            handleCancel={handleCancel}
          />
        </TabPane>
      </Tabs>
    </StyledSettings>
  );
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  updateError: state.userReducer.userUpdateError,
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
